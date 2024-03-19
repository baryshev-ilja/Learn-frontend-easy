import { RouteProps } from 'react-router-dom';

// eslint-disable-next-line baryshewww/layers-import
import { UserRole } from '@/entities/user';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
