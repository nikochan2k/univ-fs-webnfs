import { ExistsAction, NoParentAction, NotExistAction } from "univ-fs";
import { WnfsFileSystem } from "../WnfsFileSystem";

export const fs = new WnfsFileSystem();

export const setup = async () => {
  const root = fs.getDirectory("/");
  await root.rm({
    onNotExist: NotExistAction.Ignore,
    recursive: true,
    ignoreHook: true,
  });
  await root.mkdir({
    onExists: ExistsAction.Skip,
    onNoParent: NoParentAction.Error,
    ignoreHook: true,
  });
};
