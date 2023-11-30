import React from "react";

const Map = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21167.74659652303!2d23.94081366258173!3d37.939672346877764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1903f35061a23%3A0xdb6b7da197a08bc9!2zSUtFQSDOkc61z4HOv860z4HPjM68zrnOvw!5e0!3m2!1sel!2sgr!4v1701360209320!5m2!1sel!2sgr";

  return (
    <section className="map" style={{ padding: "2em 0" }}>
      <iframe
        title="Google Map"
        width="320"
        height="320"
        style={{
          border: 0,
          margin: "auto",
          display: "block",
          borderRadius: "0.5em",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={mapSrc}
      />
    </section>
  );
};

export default Map;
