import PeopleService from "@/services/people.service";
import { useInfiniteQuery } from "@tanstack/react-query";

const usePeoplesData = (characterName?: string) => {
  return useInfiniteQuery({
    queryKey: ["people", characterName],
    queryFn: ({ pageParam }) => {
      return PeopleService.getAll({ page: pageParam, search: characterName });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.next ? +lastPage.next.split("page=")[1] : null;
    },
  });
};

export default usePeoplesData;
