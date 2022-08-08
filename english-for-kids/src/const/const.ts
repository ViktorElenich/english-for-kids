import {RouteEnum} from "../enums/enums";

export const navigationLinks = [
    { name: 'Main Page', href: RouteEnum.Main },
    { name: 'Action (set A)', href: RouteEnum.Action1 },
    { name: 'Action (set B)', href: RouteEnum.Action2 },
    { name: 'Animal (set A)', href: RouteEnum.Animals1 },
    { name: 'Animal (set B)', href: RouteEnum.Animals2 },
    { name: 'Clothes', href: RouteEnum.Clothes },
    { name: 'Emotions', href: RouteEnum.Emotions },
    { name: 'Places', href: RouteEnum.Places },
];

export const captions = [
    'Action (set A)',
    'Action (set B)',
    'Animal (set A)',
    'Animal (set B)',
    'Clothes',
    'Emotions',
];

export const CHANGE_MODE = 'CHANGE_MODE';
export const ROTATE_TRAIN_CARD = 'ROTATE_TRAIN_CARD';