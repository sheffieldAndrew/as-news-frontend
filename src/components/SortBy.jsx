const SortBy = ({ setSort_by, setOrder }) => {
  return (
    <section className="sort_by">
      <h4 className="sort_by_label">Sort articles</h4>
      <select
        name="sort_by"
        id=""
        className="sort_by_sort_by"
        onChange={(e) => {
          setSort_by(e.target.value);
        }}
      >
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="votes">Votes</option>
        <option value="created_at">Date posted</option>
        <option value="comment_count">Number of comments</option>
      </select>

      <select
        name="order"
        id=""
        className="sort_by_order"
        onChange={(e) => {
          setOrder(e.target.value);
        }}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </section>
  );
};

export default SortBy;
