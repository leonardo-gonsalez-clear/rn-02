declare module "*.png" {
  const value: string
  export default value
}


interface IComment {
  name: string
  comment: string
}

interface IPost {
  id: string | number
  name: string
  email: string
  avatarUrl: string
  image: ImageSourcePropType
  comments?: IComment[]
}
