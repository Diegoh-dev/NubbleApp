export interface AuthTypes {
  auth: {
    type: string; //'bearer';
    token: string; //'MQ.t175y7-GayXpH6sPpf5l4lTruBRz73f38QCg_qD2ZKF9m4CqndlCS-2j0-bN';
  };
  user: {
    id: number; //1;
    firstName: string; //'Maria';
    lastName: string; // 'Julia';
    username: string; // 'mariajulia';
    email: string; //'mariajulia@coffstack.com';
    tempToken: null;
    rememberMeToken: null;
    profileUrl: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
    isOnline: boolean; //false;
    tempTokenCreatedAt: null;
    rememberMeTokenCreatedAt: null;
    fullName: string; // 'Maria Julia';
  };
}

export interface AuthAPI {
  auth: {
    type: string; //'bearer';
    token: string; //'MQ.t175y7-GayXpH6sPpf5l4lTruBRz73f38QCg_qD2ZKF9m4CqndlCS-2j0-bN';
  };
  user: {
    id: number; //1;
    first_name: string; //'Maria';
    last_name: string; // 'Julia';
    username: string; // 'mariajulia';
    email: string; //'mariajulia@coffstack.com';
    temp_token: null;
    remember_me_token: null;
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
    is_online: boolean; //false;
    temp_token_created_at: null;
    remember_me_token_created_at: null;
    full_name: string; // 'Maria Julia';
  };
}
