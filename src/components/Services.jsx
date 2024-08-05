import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";
import services from "../data/services";

function Services() {
  return (
    <div className="py-12">
      <SectionTitle>Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceItem key={service.title} service={service}></ServiceItem>
        ))}
      </div>
    </div>
  );
}

export default Services;
