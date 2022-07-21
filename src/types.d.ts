import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';

interface SideItemTypes {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  heading: string;
  link?: string;
}

interface VideoCardTypes {
  thumbnail: string;
  title: string;
  channelIcon: string;
  channelName: string;
  views: string;
  timestamp: string;
}