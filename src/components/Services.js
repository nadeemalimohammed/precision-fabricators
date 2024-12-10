import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import customMetalFabrication from '../images/custom-metal-fabrication.jpg';
import weldingServices from '../images/welding-services.jpg';
import structuralFabrication from '../images/structural-fabrication.jpg';
import sheetMetalWork from '../images/sheet-metal-work.jpg';
import equipmentRepair from '../images/equipment-repair-and-maintenance.jpg';
import laserCutting from '../images/laser-cutting-and-engraving.jpg';
import metalFinishing from '../images/metal-finishing-and-coating.jpg';
import industrialFabrication from '../images/industrial-fabrication.jpg';
import ornamentalMetalwork from '../images/ornamental-metalwork.jpg';


const services = [
  {
    title: 'Custom Metal Fabrication',
    description: 'Tailored metal fabrication services to meet specific client requirements. We specialize in designing custom metal structures and products, using various materials like steel, aluminum, and copper for industrial and creative applications.',
    image: customMetalFabrication,
  },
  {
    title: 'Welding Services',
    description: 'Professional welding solutions, including MIG, TIG, and arc welding, for repairs, construction, and custom projects. Our precision welding ensures seamless results for intricate designs and heavy-duty applications.',
    image: weldingServices,
  }, {
    title: 'Structural Fabrication',
    description: 'Fabrication of structural elements like steel frames, beams and columns for buildings and infrastructure. Our craftsmanship guarantees durability, safety, and compliance with industry standards, suitable for all projects.',
    image: structuralFabrication,
  }, {
    title: 'Sheet Metal Work',
    description: 'Expert sheet metal cutting, bending, and shaping services to produce HVAC ducts, machine guards, and custom panels. We provide high-quality sheet metal solutions tailored to meet exact specifications.',
    image: sheetMetalWork,
  }, {
    title: 'Equipment Repair and Maintenance',
    description: 'Quick and reliable repair services for industrial and agricultural equipment. Regular maintenance ensures optimal performance and extends equipment lifespan, minimizing downtime for your operations.',
    image: equipmentRepair,
  }, {
    title: 'Laser Cutting and Engraving',
    description: 'Precision laser cutting and engraving services for metals and other materials. Perfect for creating custom signs, intricate designs, and industrial components with exceptional accuracy.',
    image: laserCutting,
  }, {
    title: 'Metal Finishing and Coating',
    description: 'Enhance the appearance and durability of your metal products with our finishing services. We offer powder coating, painting, and polishing options to prevent rust and provide a flawless finish in your preferred color and texture.',
    image: metalFinishing,
  }, {
    title: 'Industrial Fabrication',
    description: 'Specialized fabrication services for industrial equipment, including tanks, hoppers, conveyors, and machine parts. We ensure high-performance solutions built for heavy-duty environments.',
    image: industrialFabrication,
  }, {
    title: 'Ornamental Metalwork',
    description: 'Custom-crafted metalwork for decorative purposes, including gates, railings, and furniture. Our designs combine aesthetic appeal with robust craftsmanship to match your style and vision.',
    image: ornamentalMetalwork,
  },

];

function Services() {
  const navigate = useNavigate();
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => navigate('/contact')}>Get Quote</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
