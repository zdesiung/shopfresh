export default function MapEmbed() {
  return (
    <div className="w-full h-80 overflow-hidden rounded-lg shadow-md mt-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7811!2d-76.947!3d-12.052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c4!2sAte%20Vitarte%2C%20Lima%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v167345679"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
