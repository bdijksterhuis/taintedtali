export type Command = {
  id: string;
  command: string;
  response: string;
  permission: string;
  cooldown: number;
  user_cooldown: number;
  cost: number;
  count: number;
  usage: string;
  enabled: boolean;
};

export type Response = {
  commands: Command;
};
