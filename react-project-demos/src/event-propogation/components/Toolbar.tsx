import Button from "./Button";

interface ToolbarProps {
  stopPropagation?: boolean;
  useCapture?: boolean;
}

const Toolbar = ({ stopPropagation, useCapture }: ToolbarProps) => {
  const handleToolbar = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Bubbling: Toolbar clicked");
    alert("Toolbar Clicked");
  };

  const handleCaptureEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Capturing: Toolbar capture event");
    alert("Toolbar Capture Event");
  };

  const handleClickMovieBtn = (e: React.MouseEvent) => {
    if (stopPropagation) {
      console.log("stopPropagation in Movie Button");
      e.stopPropagation();
    }
    console.log("Movie button clicked");
    alert("Searching for movies...");
  };

  const handleClickSongBtn = (e: React.MouseEvent) => {
    if (stopPropagation) {
      console.log("stopPropagation in Song Button");
      e.stopPropagation();
    }
    console.log("Song button clicked");
    alert("Searching for songs...");
  };

  return (
    <div
      className="mt-10 flex gap-5 bg-cyan-700 p-3"
      onClick={handleToolbar}
      {...(useCapture && { onClickCapture: handleCaptureEvent })}
    >
      <Button color="primary" onClick={handleClickMovieBtn}>
        Search Movie
      </Button>
      <Button color="secondary" onClick={handleClickSongBtn}>
        Search Song
      </Button>
    </div>
  );
};

export default Toolbar;
