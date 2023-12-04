import { GoArrowUpRight } from "react-icons/go";

export const SlideContent = ({ id, title, image, text, date }) => {
  return (
    <div className="block-first" key={id}>
      <div className="wrapper-image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <div className="description">
          <h3 className="title">{title}</h3>
          <GoArrowUpRight />
        </div>
        <div className="date">
          <p>{text}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
