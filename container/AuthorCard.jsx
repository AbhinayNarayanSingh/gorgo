const AuthorCard = ({ n }) => {
  return (
    <div className="col-6 col-md-3" key={n.id}>
      <div className="authors-list">
        <img
          src="https://us.123rf.com/450wm/apoev/apoev1902/apoev190200141/125038134-person-gray-photo-placeholder-man-in-a-costume-on-gray-background.jpg?ver=6"
          alt={n.name}
        />
        {/* <Link href="/"> */}
        <h2>{n.name}</h2>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default AuthorCard;
