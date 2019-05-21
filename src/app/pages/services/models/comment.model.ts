export interface Comment {
    id?: string;
    type: string;
    userId: string ;
    postId: string ;
    text: string;
    created: string;
    // likes: number;
    // replies: string[] ;
  }