export interface TUser {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    country: string,
    profession: string,
    password?: string,
    profilePicture?: string
}