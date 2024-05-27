export interface LoginRequest {
  data: {
    user: {
      email: string;
      password: string;
    };
  };
}
export interface LoginResponse {
  accessToken: string;
}

export interface RegisterRequest {
  data: {
    user: {
      name: string;
      email: string;
      password: string;
      phoneNumber: string | null;
    };
  };
}

export interface RegisterResponse {}

export interface AddToWaitListRequest {
  data: {
    email: string;
    createdAt: string;
  };
}
export interface AddToWaitListResponse {}

export interface GetWaitListRequest {}
export interface GetWaitListResponse {
  waitList: {
    email: string;
    createdAt: string;
  }[];
}
