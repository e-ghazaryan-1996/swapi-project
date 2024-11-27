import PeopleService from "@/services/people.service";
import { useQuery } from "@tanstack/react-query";

export const useCharacterData = (characterId: string) => {
  return useQuery({
    queryKey: ["character", characterId],
    queryFn: () => PeopleService.getById(characterId),
    enabled: !!characterId,
  });
};
