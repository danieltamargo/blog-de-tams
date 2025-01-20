/// <reference path="../.astro/types.d.ts" />

import { CustomNotificationManager } from "@utils/custom-notification-manager";


declare global {
    interface Window {
        CustomNotificationManager: CustomNotificationManager;
    }
}