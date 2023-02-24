import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Routes {
  Home = 'Home',
  Posts = 'Posts',
  MainTabs = 'MainTabs',
  MainTabsRoutes = 'MainTabsRoutes',
}

export type HomeParams = {[Routes.Home]: undefined};
export type MainParams = {[Routes.MainTabs]: undefined};

export type PostsParams = {
  [Routes.Posts]: {
    userId: string;
    title: string;
    postId: string;
  };
};

export type HomeNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<HomeParams, Routes.Home>,
  CompositeNavigationProp<
    NativeStackNavigationProp<HomeParams, Routes.Home>,
    CompositeNavigationProp<
      NativeStackNavigationProp<PostsParams, Routes.Posts>,
      NativeStackNavigationProp<MainParams, Routes.MainTabs>
    >
  >
>;

export type PostsRouteProps<RoutName extends keyof PostsParams> = RouteProp<
  PostsParams,
  RoutName
>;
