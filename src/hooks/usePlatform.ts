import usePlatforms from "./usePlatforms";

const usePlaform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlaform;
