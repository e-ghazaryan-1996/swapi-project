import { API_ROUTES, axiosInstance } from "@/services/axios.service";
import {
  IPeople,
  IPeopleParams,
  IPeopleResponse,
} from "@/types/people.interface";

class PeopleService {
  static async getAll({ page, search }: IPeopleParams) {
    const { data } = await axiosInstance.get<IPeopleResponse>(
      API_ROUTES.CHARACTERS,
      {
        params: {
          page,
          search,
        },
      }
    );
    return data;
  }
  static async getById(id: string) {
    const { data } = await axiosInstance.get<IPeople>(
      `${API_ROUTES.CHARACTERS}/${id}`
    );
    return data;
  }
}

export default PeopleService;
