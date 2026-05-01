import { featuredProjectDefinitions } from "../data/siteContent";

export const getPublicAssetPath = (assetName) =>
  `${import.meta.env.BASE_URL}${assetName.replace(/^\/+/, "")}`;

const normalizeString = (value) =>
  value
    ?.toString()
    .trim()
    .toLowerCase();

const buildProjectImagePath = (imageName) =>
  imageName ? getPublicAssetPath(imageName) : null;

export const createFeaturedProjects = (repositories = []) => {
  const repositoriesByPath = new Map(
    repositories
      .filter((repository) => repository.full_name)
      .map((repository) => [normalizeString(repository.full_name), repository]),
  );

  return featuredProjectDefinitions.map((definition) => {
    const repository =
      repositoriesByPath.get(normalizeString(definition.repoPath)) ??
      repositories.find(
        ({ html_url }) =>
          normalizeString(html_url) === normalizeString(definition.repoUrl),
      );

    return {
      id: repository?.id ?? definition.id,
      name: repository?.name ?? definition.fallbackName,
      description:
        repository?.description?.trim() || definition.fallbackDescription,
      topics:
        repository?.topics?.length > 0
          ? repository.topics
          : definition.fallbackTopics,
      url: definition.repoUrl,
      imagePath:
        repository?.social_preview_url ||
        buildProjectImagePath(definition.imageName),
      imageAlt: definition.imageAlt || `${definition.fallbackName} preview`,
      placeholderClassName:
        definition.placeholderClassName ||
        "from-[#191326] via-[#342152] to-[#110d1b]",
      repoPath: definition.repoPath,
    };
  });
};
