import Image from "./CharacterImage";

const ImageSources = () => {
  const imageSources = [
    "archer-BW-1.png",
    "archer-BW-2.png",
    "archer-BW-3.png",
    "archer-BW-4.png",
  ];

  return (
    <div>
      <Image imageSources={imageSources} />
    </div>
  );
};

export default ImageSources;
