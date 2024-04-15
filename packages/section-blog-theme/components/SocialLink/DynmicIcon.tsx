// import upperCamelCase from "uppercamelcase";
import camelCase from 'camelcase';
import * as Icons from '@icons-pack/react-simple-icons';
import type { IconSvg } from "@/src/types";

// temporary solution
const Icon = ({ name, ...props }: IconSvg ) => {

  const regex = /\d/;  // check number in string

  let IconsName:string = regex.test(name) === true ? name?.toLowerCase() as string : camelCase(name, {pascalCase: true});


  let GetIcons = Icons[`Si${IconsName}`]

  return <GetIcons {...props} />
};

export default Icon;
