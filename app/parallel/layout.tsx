const layout = ({
  children,
  posts,
  profile,
}: {
  children: React.ReactNode;
  posts: React.ReactNode;
  profile: React.ReactNode;

}) => {
  return (
    <>
      {children}
      {posts}
      {profile}
    </>
  );
};

export default layout;
