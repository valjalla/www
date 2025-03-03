"use client";

import { useState, useEffect, useRef, useCallback, MouseEvent } from "react";
import * as THREE from "three";

export function SPhere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xff4800, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    const blueLight = new THREE.PointLight(0x00ffff, 0.5);
    blueLight.position.set(-2, 1, 3);
    scene.add(blueLight);

    // geo
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.4,
    });
    const wireframeMesh = new THREE.LineSegments(wireframe, lineMaterial);

    // materials
    const innerMaterial = new THREE.MeshPhongMaterial({
      color: 0x0077ff,
      emissive: 0x001133,
      transparent: true,
      opacity: 0.35,
      shininess: 100,
    });
    const sphere = new THREE.Mesh(geometry, innerMaterial);
    sphere.scale.set(0.95, 0.95, 0.95);

    const sphereGroup = new THREE.Group();
    sphereGroup.add(wireframeMesh);
    sphereGroup.add(sphere);
    scene.add(sphereGroup);

    // anim loop
    function animate() {
      requestAnimationFrame(animate);
      sphereGroup.rotation.x += 0.002;
      sphereGroup.rotation.y += 0.004;
      const pulseScale = 0.95 + 0.03 * Math.sin(Date.now() * 0.001);
      sphere.scale.set(pulseScale, pulseScale, pulseScale);
      if (Math.random() > 0.98) {
        lineMaterial.opacity = 0.1 + Math.random() * 0.5;
      }
      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef?.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
    />
  );
}

export function HexaGrid() {
  const [activeHexagons, setActiveHexagons] = useState([true, false, true, false, true]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveHexagons((prev) => {
        const newActiveHexagons = [...prev];
        const randomIndex = Math.floor(Math.random() * newActiveHexagons.length);
        newActiveHexagons[randomIndex] = !newActiveHexagons[randomIndex];
        return newActiveHexagons;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex space-x-4">
      {activeHexagons.map((isActive, index) => (
        <div
          key={index}
          className={`hexagon ${isActive ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
}

export function FocusSpray() {
  const [isDragging, setIsDragging] = useState(false);
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const [endPoint, setEndPoint] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setStartPoint({ x, y });
    setEndPoint({ x, y });
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setEndPoint({ x, y });
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const selectionStyles = {
    left: Math.min(startPoint.x, endPoint.x),
    top: Math.min(startPoint.y, endPoint.y),
    width: Math.abs(endPoint.x - startPoint.x),
    height: Math.abs(endPoint.y - startPoint.y),
  };

  return (
    <div
      className="absolute inset-0 z-50"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ pointerEvents: "auto" }}
    >
      {isDragging && (
        <div
          className="absolute border border-naranja/60 bg-naranja/10 z-50"
          style={selectionStyles}
        >
          <div className="absolute top-0 right-0 text-xs text-naranja px-1">
            {Math.round(selectionStyles.width)} x {Math.round(selectionStyles.height)}
          </div>
        </div>
      )}
    </div>
  );
}
