export type Tweet = {
  id: string;
  created_at: string;
  text: string;
  likes: number;
  retweets: number;
  username: string;
  tweet_url: string;
  follow_url: string;
  media: TweetMedia;
};

export type TweetMedia = {
  hasMedia: boolean;
  id?: string;
  media_url?: string;
  link_url?: string;
  display_url?: string;
};

export type Response = {
  tweets: Tweet;
};
