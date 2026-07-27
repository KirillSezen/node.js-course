import type { AxiosResponse } from "axios";
import type { IUser } from "../models/response/IUser";
import $api from "../http";

export default class UserService {
	static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
		return $api.get<IUser[]>('/users')
	}
}