﻿/*global define */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(
     ({
        map: {  // Map, feature layer, and comments table loading and checking
            error: "Nevar izveidot karti",
            layerLoad: "Nevar pilnībā ielādēt karti",
            missingItemsFeatureLayer: "Lūdzu, konfigurējiet lietotni, lai izmantotu elementu slāni"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Rādīt izvēlni",
            signInButton: "Pierakstīties",
            signInButtonTooltip: "Pierakstīties",
            signOutButton: "Izrakstīties",
            signOutButtonTooltip: "Izrakstīties",
            helpButtonLabel: "Palīdzība",
            helpButtonTooltip: "Papildinformācija",
            gotoListViewLabel: "Saraksta skats",
            gotoListViewTooltip: "Pāriet uz saraksta skatu", // Go to List view tooltip text
            gotoMapViewLabel: "Kartes skats",
            gotoMapViewTooltip: "Iet uz kartes skatu" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Aizvērt"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Pieteikties ar Facebook",
            signIntoGooglePlusTooltip: "Pieteikties ar Google+",
            signIntoTwitterTooltip: "Pieteikties ar Twitter",
            signOutOfFacebookTooltip: "Izrakstīties no Facebook",
            signOutOfGooglePlusTooltip: "Izrakstīties no Google+",
            signOutOfTwitterTooltip: "Izrakstīties no Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (pēc izvēles)",
            requiredFormItemFlag: " (nepieciešams)",
            unsettableRequiredField: "Nepieciešamais lauks nav ne inicializēts, ne veidlapā",
            countOfRemainingCharactersTooltip: "Atlikušās rakstzīmes",
            cancelButtonLabel: "Atcelt",
            submitButtonLabel: "Iesniegt"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Balsot par šo vienumu",
            commentButtonTooltip: "Pievienot komentāru",
            gotoMapViewTooltip: "Iet uz kartes skatu",
            galleryButtonTooltip: "Skatīt pievienotos failus",
            commentsListHeading: "Komentāri",
            noCommentsPlaceholder: "Nav komentāru"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtrēt sarakstu pēc kartes",
            linkToMapViewOptionTooltip: "Saraksta elementi, kas ir redzami pašreizējā kartē",
            likesForThisItemTooltip: "Balsis par šo vienumu"
        }
    })
);
