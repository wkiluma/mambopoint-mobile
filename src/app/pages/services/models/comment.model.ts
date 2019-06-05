export interface Comment {
    id?: string;
    type: string;
    userId:string ;
    postId:string ;
    comment: any;
    created: string;
    likes: string;
    replies:string[] ;
  }