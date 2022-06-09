import "../../style/newList.scss";
const NewsList = (props) => {
  const { HotNews, title } = props;
  const hot = HotNews.reverse();
  console.log("hot:", hot);
  return (
    <div className="news-container">
      <h2 className="title">{title}</h2>
      <div className="news-list-card">
        {hot.map((item, index) => {
          return (
            <div key={index} className="item-card">
              <h5>{item.title}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
