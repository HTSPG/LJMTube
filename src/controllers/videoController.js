export const trending = (req, res) => {
  return res.render("home");
};
export const see = (req, res) => {
  const { id } = req.params;

  return res.render("watch", { pageTitle: `Watching ${video.title}` });
};
export const edit = (req, res) => res.send("Edit Video");
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
