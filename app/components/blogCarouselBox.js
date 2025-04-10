"use client";
import { useRouter } from "next/navigation";
export default function BlogCarouselItem({ id, title, description, image }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${id}`);
  };

  function truncateText(text, maxLength = 55) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  return (
    <div className="blogBoxWrapper">
      <div className="blogBoxImg">
        <img src={image} alt="blogImage" />
        <img
          src="/icons/carouselBoxIcon.svg"
          alt="icon"
          onClick={handleClick}
        />
      </div>
      <div className="blogBoxText">
        <p>{title}</p>
        <p>{truncateText(description)}</p>
      </div>
    </div>
  );
}
