import { ProjectModel } from 'src/models/project/project.model';
import { AccessModel } from 'src/models/common/access.model';
import { UserModel } from 'src/models/user/user.model';

export interface FilterInterface {
  readonly id: number;
  name: string;
  favorite: boolean;
  favoriteCount: number;
  project: ProjectModel;
  access: AccessModel;
  leader: UserModel;
}
