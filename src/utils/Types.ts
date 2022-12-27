export interface BreadCrumbsType {
  text: string;
  href?: string;
  onClick?: () => void;
}

export interface UserType {
  email: string;
  name: string;
  uid: string;
  label?: string;
}