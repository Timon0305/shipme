/*

@page Components Index
@description Index for layout and Widget's components
 */


//LAYOUT
import AppDrawer from './layout/AppDrawer.vue';
import AppTop from './layout/AppTop.vue';
import AppParallax from './layout/AppParallax.vue';
import AppDrawerList from './layout/AppDrawerList.vue'
import AppHeader from './layout/AppHeader.vue'
import AppTopSearch from './layout/AppTopSearch.vue'
import AppCard from './layout/appCard.vue'
import AppMessages from './app-top/AppMessages.vue'
import AppNotifications from "./app-top/AppNotifications.vue"
import AppUser from "./app-top/AppUser.vue"
import AppTranslation from './app-top/AppTranslation.vue'

//EXAMPLES
/**
 *
 * ui
 *
 */
/**
 * @title Alerts components.
 * The <code> v-alert</code> comp onent is used to convey important information to the user
 *  It comes in 4 variations, **success**, **info**, **warning** and **error**
 *  These have default icons assigned which can be changed and represent different actions
 */
import alertsClosable from '@/components/ui/alerts/closable.vue'
import alertsIcon from '@/components/ui/alerts/icon.vue'
import alertsOutline from '@/components/ui/alerts/outline.vue'
import alertsTransition from '@/components/ui/alerts/transition.vue'

/**
 * @title Avatars components.
 * The <code> v-avatar</code> comp onent is used to control the size and border radius of responsive images, typically used to show profile pictures.
 */
import avatarsAdvanced from '@/components/ui/avatars/advanced.vue'
import avatarsIconAndText from '@/components/ui/avatars/iconAndText.vue'


/**
 * @title Badges components.
 * The <code> v-badge</code> comp onent can wrap any type of content to highlight information to a user or to just draw attention to a specific element.
 */
import badgesIcon from '@/components/ui/badges/icon.vue'
import badgesInline from '@/components/ui/badges/inline.vue'
import badgesOverlap from '@/components/ui/badges/overlap.vue'

import badgesVisibility from '@/components/ui/badges/visibility.vue'

/**
 * @title Buttons components.
 * The <code> v-btn</code> comp onent replaces the standard html button with a material design theme and a multitude of options
 *  Any color helper class can be used to alter the background or text color.
 */
import buttonsBlock from '@/components/ui/buttons/block.vue'
import buttonsDepressed from '@/components/ui/buttons/depressed.vue'
import buttonsDropdown from '@/components/ui/buttons/dropdown.vue'
import buttonsFlat from '@/components/ui/buttons/flat.vue'
import buttonsFloating from '@/components/ui/buttons/floating.vue'
import buttonsIcon from '@/components/ui/buttons/icon.vue'
import buttonsLoaders from '@/components/ui/buttons/loaders.vue'
import buttonsOutline from '@/components/ui/buttons/outline.vue'
import buttonsRaised from '@/components/ui/buttons/raised.vue'
import buttonsRound from '@/components/ui/buttons/round.vue'
import buttonsSizing from '@/components/ui/buttons/sizing.vue'


/**
 * @title Bottomnavigation components.
 * Bottomnavigation Examples
 */
import bottomNavigationColorAndShift from '@/components/ui/bottom-navigation/colorAndShift.vue'
import bottomNavigationToggle from '@/components/ui/bottom-navigation/toggle.vue'


/**
 * @title Bottomsheets components.
 * Bottomsheets Examples
 */
import bottomSheetsInset from '@/components/ui/bottom-sheets/inset.vue'


/**
 * @title Breadcrumbs components.
 * The <code> v-breadcrumbs</code> comp onent is a navigational helper for pages
 *  It can accept a **Material Icons** icon or text characters as a divider
 *  An array of objects can be passed to the **items** property of the component
 *   Additionally, a scoped slot exists for more control of the breadcrumbs, either utilizing <code> v-breadcrumbs-item </code> or other custom markup.
 */
import breadcrumbsIconDividers from '@/components/ui/breadcrumbs/iconDividers.vue'
import breadcrumbsItemSlot from '@/components/ui/breadcrumbs/itemSlot.vue'



/**
 * @title Cards components.
 * The <code> v-card</code> comp onent is a versatile component that can be used for anything from a panel to a static image
 *  The **card** component has numerous helper components to make markup as easy as possible
 *  Components that have no listed options use **Vue's** functional component option for faster rendering and serve as markup sugar to make building easier.
 */
import cardsCustomActions from '@/components/ui/cards/customActions.vue'
import cardsGrids from '@/components/ui/cards/grids.vue'
import cardsHorizontal from '@/components/ui/cards/horizontal.vue'
import cardsMediaWithText from '@/components/ui/cards/mediaWithText.vue'
import cardsTwitterCard from '@/components/ui/cards/twitterCard.vue'


/**
 * @title Carousels components.
 * The <code> v-carousel</code> comp onent is used to display large numbers of visual content on a rotating timer.
 */
import carouselsCustomIcons from '@/components/ui/carousels/customIcons.vue'
import carouselsCustomTransition from '@/components/ui/carousels/customTransition.vue'
import carouselsHideControls from '@/components/ui/carousels/hideControls.vue'
import carouselsHideDelimiters from '@/components/ui/carousels/hideDelimiters.vue'


/**
 * @title Chips components.
 * The <code> v-chip</code> comp onent is used to convey small pieces of information
 *  Using the <code>close</code> property, the chip becomes interactive, allowing user interaction.
 */
import chipsClosable from '@/components/ui/chips/closable.vue'
import chipsColored from '@/components/ui/chips/colored.vue'
import chipsIcon from '@/components/ui/chips/icon.vue'
import chipsInSelects from '@/components/ui/chips/inSelects.vue'
import chipsLabel from '@/components/ui/chips/label.vue'
import chipsOutline from '@/components/ui/chips/outline.vue'


/**
 * @title Dataiterator components.
 * Dataiterator Examples
 */
import dataIteratorSlots from '@/components/ui/data-iterator/slots.vue'


/**
 * @title Datatables components.
 * Datatables Examples
 */
import dataTablesCrud from '@/components/ui/data-tables/crud.vue'
import dataTablesCustomIcons from '@/components/ui/data-tables/customIcons.vue'
import dataTablesEditdialog from '@/components/ui/data-tables/editdialog.vue'
import dataTablesExpand from '@/components/ui/data-tables/expand.vue'
import dataTablesFooter from '@/components/ui/data-tables/footer.vue'
import dataTablesHeaderCell from '@/components/ui/data-tables/headerCell.vue'
import dataTablesHeaderless from '@/components/ui/data-tables/headerless.vue'
import dataTablesHeaders from '@/components/ui/data-tables/headers.vue'
import dataTablesNoData from '@/components/ui/data-tables/noData.vue'
import dataTablesPageText from '@/components/ui/data-tables/pageText.vue'
import dataTablesPaginate from '@/components/ui/data-tables/paginate.vue'
import dataTablesProgress from '@/components/ui/data-tables/progress.vue'
import dataTablesSearch from '@/components/ui/data-tables/search.vue'
import dataTablesSelect from '@/components/ui/data-tables/select.vue'
import dataTablesServer from '@/components/ui/data-tables/server.vue'
import dataTablesSort from '@/components/ui/data-tables/sort.vue'


/**
 * @title Dividers components.
 * The <code> v-divider</code> comp onent is used to separate sections of lists.
 */
import dividersDividerList from '@/components/ui/dividers/dividerList.vue'
import dividersDividerListPortrait from '@/components/ui/dividers/dividerListPortrait.vue'
import dividersDividerPortrait from '@/components/ui/dividers/dividerPortrait.vue'
import dividersInset from '@/components/ui/dividers/inset.vue'
import dividersLightAndDark from '@/components/ui/dividers/lightAndDark.vue'
import dividersSubheaders from '@/components/ui/dividers/subheaders.vue'

import dividersVertical from '@/components/ui/dividers/vertical.vue'

/**
 * @title Expansionpanels components.
 * Expansionpanels Examples
 */
import expansionPanelsCustomIcons from '@/components/ui/expansion-panels/customIcons.vue'
import expansionPanelsDisabledAndReadonly from '@/components/ui/expansion-panels/disabledAndReadonly.vue'
import expansionPanelsExpand from '@/components/ui/expansion-panels/expand.vue'
import expansionPanelsExternal from '@/components/ui/expansion-panels/external.vue'
import expansionPanelsFocusable from '@/components/ui/expansion-panels/focusable.vue'
import expansionPanelsIconSlot from '@/components/ui/expansion-panels/iconSlot.vue'
import expansionPanelsPopout from '@/components/ui/expansion-panels/popout.vue'




/**
 * @title Footer components.
 * The <code> v-footer</code> comp onent is used for displaying general information that a user might want to access from any page within your site.
 */
import footerCompanyFooter from '@/components/ui/footer/companyFooter.vue'
import footerIndigoFooter from '@/components/ui/footer/indigoFooter.vue'
import footerTealFooter from '@/components/ui/footer/tealFooter.vue'


/**
 * @title Menus components.
 * The <code> v-menu</code> comp onent shows a menu at the position of the element used to activate it.
 */
import menusAbsolute from '@/components/ui/menus/absolute.vue'
import menusAbsoluteWithoutActivator from '@/components/ui/menus/absoluteWithoutActivator.vue'
import menusCustomTransition from '@/components/ui/menus/customTransition.vue'
import menusHover from '@/components/ui/menus/hover.vue'
import menusMenus from '@/components/ui/menus/menus.vue'
import menusPopover from '@/components/ui/menus/popover.vue'


/**
 * @title Navigationdrawers components.
 * Navigationdrawers Examples
 */
import navigationDrawersCombined from '@/components/ui/navigation-drawers/combined.vue'
import navigationDrawersDark from '@/components/ui/navigation-drawers/dark.vue'
import navigationDrawersMini from '@/components/ui/navigation-drawers/mini.vue'
import navigationDrawersNested from '@/components/ui/navigation-drawers/nested.vue'
import navigationDrawersPermanentClipped from '@/components/ui/navigation-drawers/permanentClipped.vue'
import navigationDrawersPermanentFloating from '@/components/ui/navigation-drawers/permanentFloating.vue'
import navigationDrawersPermanentFloatingCard from '@/components/ui/navigation-drawers/permanentFloatingCard.vue'
import navigationDrawersPersistent from '@/components/ui/navigation-drawers/persistent.vue'
import navigationDrawersTemporary from '@/components/ui/navigation-drawers/temporary.vue'


/**
 * @title Paginations components.
 * The <code> v-pagination</code> comp onent is used to separate long sets of data so that it is easier for a user to consume information
 *  Depending on the length provided, the pagination component will automatically scale
 *  To maintain the current page, simply supply a <code> v-model` attribute.
 */
import paginationsDisabled from '@/components/ui/paginations/disabled.vue'
import paginationsIcons from '@/components/ui/paginations/icons.vue'
import paginationsLimit from '@/components/ui/paginations/limit.vue'
import paginationsLong from '@/components/ui/paginations/long.vue'
import paginationsRound from '@/components/ui/paginations/round.vue'

/**
 * @title Images components.
 * The <code> v-img</code> comp onent is packed with features to support rich media
 *  Combined with the [vuetify-loader](https://github.com/vuetifyjs/vuetify-loader), you can add dynamic progressive images to provide a better user experience.
 */
import imagesContainCover from '@/components/ui/images/containCover.vue'
import imagesGradients from '@/components/ui/images/gradients.vue'
import imagesMaxHeight from '@/components/ui/images/maxHeight.vue'
import imagesRatio from '@/components/ui/images/ratio.vue'

/**
 * @title Lists components.
 * The <code> v-list</code> comp onent is used to display information
 *  It can contain an avatar, content, actions, subheaders and much more
 *  Lists can contain children and are used in the sidebar.
 */
import listsActionTitleAndSubtitle from '@/components/ui/lists/actionTitleAndSubtitle.vue'


import listsAvatarSubheaderTitleAndAction from '@/components/ui/lists/avatarSubheaderTitleAndAction.vue'
import listsAvatarThreeLines from '@/components/ui/lists/avatarThreeLines.vue'
import listsAvatarTitleAndAction from '@/components/ui/lists/avatarTitleAndAction.vue'
import listsCardList from '@/components/ui/lists/cardList.vue'
import listsExpansionLists from '@/components/ui/lists/expansionLists.vue'
import listsIconTwoLinesAndAction from '@/components/ui/lists/iconTwoLinesAndAction.vue'
import listsSubheadingsAndDividers from '@/components/ui/lists/subheadingsAndDividers.vue'
import listsTitleSubtitleActionsAndActionText from '@/components/ui/lists/titleSubtitleActionsAndActionText.vue'


/**
 * @title Dialogs components.
 * The <code> v-dialog</code> comp onent inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks
 *  Use dialogs sparingly because they are interruptive.
 */
import dialogsAdvanced from '@/components/ui/dialogs/advanced.vue'
import dialogsForm from '@/components/ui/dialogs/form.vue'
import dialogsFullscreen from '@/components/ui/dialogs/fullscreen.vue'
import dialogsLoader from '@/components/ui/dialogs/loader.vue'
import dialogsModal from '@/components/ui/dialogs/modal.vue'
import dialogsOverflowed from '@/components/ui/dialogs/overflowed.vue'
import dialogsScrollable from '@/components/ui/dialogs/scrollable.vue'

import dialogsWithoutActivator from '@/components/ui/dialogs/withoutActivator.vue'
/**
 * @title Floatingactionbuttons components.
 * Floatingactionbuttons Examples
 */
import floatingActionButtonsDisplayAnimation from '@/components/ui/floating-action-buttons/displayAnimation.vue'
import floatingActionButtonsLateralScreens from '@/components/ui/floating-action-buttons/lateralScreens.vue'
import floatingActionButtonsSmall from '@/components/ui/floating-action-buttons/small.vue'
import floatingActionButtonsSpeedDial from '@/components/ui/floating-action-buttons/speedDial.vue'

/**
 *
 * Charts
 *
 */
/**
 * @title Bar3d components.
 * Bar3d Examples
 */
import bar3DExample1 from '@/components/charts/bar-3-d/example1.vue'
import bar3DExample2 from '@/components/charts/bar-3-d/example2.vue'
import bar3DExample3 from '@/components/charts/bar-3-d/example3.vue'

/**
 * @title Barchart components.
 * Barchart Examples
 */
import barChartBar from '@/components/charts/bar-chart/bar.vue'
import barChartBarAndLine from '@/components/charts/bar-chart/barAndLine.vue'
import barChartBarHorizontal from '@/components/charts/bar-chart/barHorizontal.vue'
/**
 * @title Globe components.
 * globe charts.
 */
import globeExample1 from '@/components/charts/globe/example1.vue'


/**
 * @title Graph components.
 * graph charts.
 */
import graphExample1 from '@/components/charts/graph/example1.vue'
import graphExample2 from '@/components/charts/graph/example2.vue'
import graphExample3 from '@/components/charts/graph/example3.vue'
/**
 * @title Calendarmap components.
 * Calendarmap Examples
 */
import calendarMapExample1 from '@/components/charts/calendar-map/example1.vue'
import calendarMapExample2 from '@/components/charts/calendar-map/example2.vue'
import calendarMapExample3 from '@/components/charts/calendar-map/example3.vue'

/**
 * @title Piechart components.
 * Piechart Examples
 */
import pieChartExample1 from '@/components/charts/pie-chart/example1.vue'
import pieChartExample2 from '@/components/charts/pie-chart/example2.vue'
import pieChartExample3 from '@/components/charts/pie-chart/example3.vue'

/**
 * @title Linechart components.
 * Linechart Examples
 */
import lineChartExample1 from '@/components/charts/line-chart/example1.vue'
import lineChartExample2 from '@/components/charts/line-chart/example2.vue'
import lineChartExample3 from '@/components/charts/line-chart/example3.vue'

/**
 * @title Mapchart components.
 * Mapchart Examples
 */
import mapChartExample1 from '@/components/charts/map-chart/example1.vue'
import mapChartExample2 from '@/components/charts/map-chart/example2.vue'
import mapChartExample3 from '@/components/charts/map-chart/example3.vue'
/**
 * @title Sankey components.
 * sankey charts.
 */
import sankeyExample1 from '@/components/charts/sankey/example1.vue'
import sankeyExample2 from '@/components/charts/sankey/example2.vue'
import sankeyExample3 from '@/components/charts/sankey/example3.vue'
/**
 * @title Tree components.
 * tree charts.
 */
import treeExample1 from '@/components/charts/tree/example1.vue'
import treeExample2 from '@/components/charts/tree/example2.vue'
import treeExample3 from '@/components/charts/tree/example3.vue'

/**
 * @title Sunburst components.
 * Sunburst Examples
 */
import sunBurstExample1 from '@/components/charts/sun-burst/example1.vue'
import sunBurstExample2 from '@/components/charts/sun-burst/example2.vue'
import sunBurstExample3 from '@/components/charts/sun-burst/example3.vue'


/**
 *
 * App
 *
 */
/**
 * @title Timelines components.
 * The <code> v-timeline </code> is useful for stylistically displaying chronological information.
 */
import timelinesAdvanced from '@/components/app/timelines/advanced.vue'
import timelinesAlert from '@/components/app/timelines/alert.vue'
import timelinesAvatars from '@/components/app/timelines/avatars.vue'
import timelinesColor from '@/components/app/timelines/color.vue'
import timelinesIcons from '@/components/app/timelines/icons.vue'
import timelinesSlot from '@/components/app/timelines/slot.vue'
import timelinesSmall from '@/components/app/timelines/small.vue'



/**
 * @title Calendars components.
 * The <code> v-calendar</code> comp onent is used to display information in a daily, weekly, or monthly view
 *  The daily view has slots for all day or timed elements, and the weekly and monthly view has a slot for each day.
 */
import calendarsDaily from '@/components/app/calendars/daily.vue'
import calendarsEvents from '@/components/app/calendars/events.vue'
import calendarsFeatures from '@/components/app/calendars/features.vue'
import calendarsSlots from '@/components/app/calendars/slots.vue'

import calendarsWeekly from '@/components/app/calendars/weekly.vue'




/**
 * @title Treeview components.
 * The <code> v-treeview</code> comp onent is useful for displaying large amounts of nested data.
 */
import treeviewDirectory from '@/components/app/treeview/directory.vue'
import treeviewFileExplorer from '@/components/app/treeview/fileExplorer.vue'
import treeviewHotspots from '@/components/app/treeview/hotspots.vue'


/**
 * @title Parallax components.
 * The <code> v-parallax</code> comp onent creates a 3d effect that makes an image appear to scroll slower than the window.
 */
import parallaxContent from '@/components/app/parallax/content.vue'
import parallaxCustomHeight from '@/components/app/parallax/customHeight.vue'


















/**
 *
 * groups
 *
 */
/**
 * @title Buttongroups components.
 * Buttongroups Examples
 */
import buttonGroupsAppBar from '@/components/groups/button-groups/appBar.vue'

/**
 * @title Itemgroups components.
 * Itemgroups Examples
 */
import itemGroupsPost from '@/components/groups/item-groups/post.vue'


/**
 * @title Windows components.
 * The <code> v-window</code> comp onent is the baseline functionality for transitioning content from 1 pane to another
 *  Other components such as <code> v-tabs`, <code> v-carousel` and <code> v-stepper` utilize this component at their core.
 */
import windowsAccount from '@/components/groups/windows/account.vue'
import windowsOnboarding from '@/components/groups/windows/onboarding.vue'

















/**
 *
 * pickers
 *
 */
/**
 * @title Timepickers components.
 * Timepickers Examples
 */
import timePickersTime24HFormat from '@/components/pickers/time-pickers/time24hFormat.vue'
import timePickersTimeAllowedTimes from '@/components/pickers/time-pickers/timeAllowedTimes.vue'
import timePickersTimeColorable from '@/components/pickers/time-pickers/timeColorable.vue'
import timePickersTimeDialogAndMenu from '@/components/pickers/time-pickers/timeDialogAndMenu.vue'
import timePickersTimeWidth from '@/components/pickers/time-pickers/timeWidth.vue'

/**
 * @title Datepickers components.
 * Datepickers Examples
 */
import datePickersDateAllowedDates from '@/components/pickers/date-pickers/dateAllowedDates.vue'
import datePickersDateBirthday from '@/components/pickers/date-pickers/dateBirthday.vue'
import datePickersDateColorable from '@/components/pickers/date-pickers/dateColorable.vue'
import datePickersDateCurrent from '@/components/pickers/date-pickers/dateCurrent.vue'
import datePickersDateDialogAndMenu from '@/components/pickers/date-pickers/dateDialogAndMenu.vue'
import datePickersDateEvents from '@/components/pickers/date-pickers/dateEvents.vue'
import datePickersDateFormatting from '@/components/pickers/date-pickers/dateFormatting.vue'
import datePickersDateFormattingMomentDatefns from '@/components/pickers/date-pickers/dateFormattingMomentDatefns.vue'
import datePickersDateIcons from '@/components/pickers/date-pickers/dateIcons.vue'
import datePickersDateInternationalization from '@/components/pickers/date-pickers/dateInternationalization.vue'
import datePickersDateMultiple from '@/components/pickers/date-pickers/dateMultiple.vue'
import datePickersDatePickerDate from '@/components/pickers/date-pickers/datePickerDate.vue'
import datePickersDateReadonly from '@/components/pickers/date-pickers/dateReadonly.vue'
import datePickersDateWidth from '@/components/pickers/date-pickers/dateWidth.vue'
import datePickersMonthAllowedMonths from '@/components/pickers/date-pickers/monthAllowedMonths.vue'
import datePickersMonthColorable from '@/components/pickers/date-pickers/monthColorable.vue'
import datePickersMonthCurrent from '@/components/pickers/date-pickers/monthCurrent.vue'
import datePickersMonthDialogAndMenu from '@/components/pickers/date-pickers/monthDialogAndMenu.vue'
import datePickersMonthEvents from '@/components/pickers/date-pickers/monthEvents.vue'
import datePickersMonthIcons from '@/components/pickers/date-pickers/monthIcons.vue'
import datePickersMonthInternationalization from '@/components/pickers/date-pickers/monthInternationalization.vue'
import datePickersMonthLight from '@/components/pickers/date-pickers/monthLight.vue'
import datePickersMonthMultiple from '@/components/pickers/date-pickers/monthMultiple.vue'
import datePickersMonthReadonly from '@/components/pickers/date-pickers/monthReadonly.vue'
import datePickersMonthWidth from '@/components/pickers/date-pickers/monthWidth.vue'

/**
 *
 * Components
 *
 */
/**
 * @title Ratings components.
 * The rating component is a specialized but crucial piece in building user widgets
 *  Collecting user feedback via ratings is a simple analytic that can provide a lot of feedback to your product or application.
 */

import ratingsCard from '@/components/utils/ratings/card.vue'
import ratingsIncrements from '@/components/utils/ratings/increments.vue'
import ratingsLength from '@/components/utils/ratings/length.vue'
import ratingsSizes from '@/components/utils/ratings/sizes.vue'




/**
 * @title Hover components.
 * The <code> v-hover</code> comp onent provides a clean interface for handling hover states for any component.
 */
import hoverTransition from '@/components/utils/hover/transition.vue'

/**
 * @title Toolbars components.
 * The <code> v-toolbar</code> comp onent is pivotal to any gui, as it generally is the primary source of site navigation
 *  The toolbar component works great in conjunction with a navigation drawer for hiding links and presenting an activator to open the sidebar on mobile.
 */
import toolbarsAppBar from '@/components/utils/toolbars/appBar.vue'
import toolbarsAppBarExtension from '@/components/utils/toolbars/appBarExtension.vue'
import toolbarsAppBarItems from '@/components/utils/toolbars/appBarItems.vue'
import toolbarsAppBarMenu from '@/components/utils/toolbars/appBarMenu.vue'
import toolbarsColumnWidthWithHierarchy from '@/components/utils/toolbars/columnWidthWithHierarchy.vue'
import toolbarsDense from '@/components/utils/toolbars/dense.vue'
import toolbarsFlexibleAndCard from '@/components/utils/toolbars/flexibleAndCard.vue'
import toolbarsFloatingWithSearch from '@/components/utils/toolbars/floatingWithSearch.vue'
import toolbarsProminent from '@/components/utils/toolbars/prominent.vue'
import toolbarsScrolling from '@/components/utils/toolbars/scrolling.vue'
import toolbarsSystemBarsStatusWindow from '@/components/utils/toolbars/systemBarsStatusWindow.vue'

import toolbarsVariations from '@/components/utils/toolbars/variations.vue'

/**
 * @title Tooltips components.
 * The <code> v-tooltip</code> comp onent is useful for conveying information when a user hovers over an element
 *  You can also programmatically control the display of tooltips through a **v-model**
 */
import tooltipsAlignment from '@/components/utils/tooltips/alignment.vue'

import tooltipsVisibility from '@/components/utils/tooltips/visibility.vue'


/**
 * @title Progress components.
 * The <code> v-progress-circular` and <code> v-progress-linear</code> comp onents are used to convey data visually to users
 *  They can also represent an indeterminate amount, such as loading or processing
 *  The circular progress component contains a slot that is centered within the circle.
 */
import progressCircularColored from '@/components/utils/progress/circularColored.vue'
import progressCircularIndeterminate from '@/components/utils/progress/circularIndeterminate.vue'
import progressCircularRotate from '@/components/utils/progress/circularRotate.vue'
import progressCircularSizeAndWidth from '@/components/utils/progress/circularSizeAndWidth.vue'
import progressLinearBuffer from '@/components/utils/progress/linearBuffer.vue'
import progressLinearCustomColors from '@/components/utils/progress/linearCustomColors.vue'
import progressLinearCustomHeightAndContextualColors from '@/components/utils/progress/linearCustomHeightAndContextualColors.vue'
import progressLinearDeterminate from '@/components/utils/progress/linearDeterminate.vue'
import progressLinearIndeterminate from '@/components/utils/progress/linearIndeterminate.vue'
import progressLinearQueryIndeterminateAndDeterminate from '@/components/utils/progress/linearQueryIndeterminateAndDeterminate.vue'


/**
 * @title Sheets components.
 * The <code> v-sheet </code> is designed to power other **paper** components within Vuetify
 *  It is meant to be used as a low level component.
 */
import sheetsElevation from '@/components/utils/sheets/elevation.vue'


/**
 * @title Sliders components.
 * The <code> v-slider</code> comp onent is a better visualization of the number input
 *  It is used for gathering numerical user data.
 */
import slidersCustomColors from '@/components/forms/sliders/customColors.vue'
import slidersCustomThumb from '@/components/forms/sliders/customThumb.vue'
import slidersDiscrete from '@/components/forms/sliders/discrete.vue'
import slidersEditableNumericValue from '@/components/forms/sliders/editableNumericValue.vue'
import slidersIcons from '@/components/forms/sliders/icons.vue'
import slidersMetronome from '@/components/forms/sliders/metronome.vue'
import slidersMinMax from '@/components/forms/sliders/minMax.vue'
import slidersRange from '@/components/forms/sliders/range.vue'
import slidersStep from '@/components/forms/sliders/step.vue'
import slidersThumb from '@/components/forms/sliders/thumb.vue'
import slidersThumbLabel from '@/components/forms/sliders/thumbLabel.vue'
import slidersTicks from '@/components/forms/sliders/ticks.vue'

import slidersValidation from '@/components/forms/sliders/validation.vue'

/**
 * @title Snackbars components.
 * The <code> v-snackbar</code> comp onent is used to display a quick message to a user
 *  Snackbars support positioning, removal delay and callbacks.
 */
import snackbarsContextual from '@/components/utils/snackbars/contextual.vue'



/**
 * @title Steppers components.
 * The <code> v-stepper</code> comp onent displays progress through numbered steps.
 */
import steppersAlternateError from '@/components/utils/steppers/alternateError.vue'
import steppersAlternateLabels from '@/components/utils/steppers/alternateLabels.vue'
import steppersAlternativeError from '@/components/utils/steppers/alternativeError.vue'
import steppersDynamic from '@/components/utils/steppers/dynamic.vue'
import steppersEditable from '@/components/utils/steppers/editable.vue'
import steppersError from '@/components/utils/steppers/error.vue'
import steppersHorizontal from '@/components/utils/steppers/horizontal.vue'
import steppersLinear from '@/components/utils/steppers/linear.vue'
import steppersNonEditable from '@/components/utils/steppers/nonEditable.vue'
import steppersNonLinear from '@/components/utils/steppers/nonLinear.vue'
import steppersOptional from '@/components/utils/steppers/optional.vue'


/**
 * @title Subheaders components.
 * The <code> v-subheader</code> comp onent is used to separate sections of lists.
 */
import subheadersGrid from '@/components/utils/subheaders/grid.vue'
import subheadersMenu from '@/components/utils/subheaders/menu.vue'
import subheadersSocial from '@/components/utils/subheaders/social.vue'



/**
 * @title Tabs components.
 * The <code> v-tabs</code> comp onent is used for hiding content behind a selectable item
 *  This can also be used as a pseudo-navigation for a page, where the tabs are links and the tab-items are the content.
 */
import tabsAlignWithTitle from '@/components/utils/tabs/alignWithTitle.vue'

import tabsContent from '@/components/utils/tabs/content.vue'
import tabsDesktop from '@/components/utils/tabs/desktop.vue'
import tabsFixedTabs from '@/components/utils/tabs/fixedTabs.vue'
import tabsGrow from '@/components/utils/tabs/grow.vue'
import tabsIcons from '@/components/utils/tabs/icons.vue'
import tabsIconsAndText from '@/components/utils/tabs/iconsAndText.vue'
import tabsOverflowToMenu from '@/components/utils/tabs/overflowToMenu.vue'
import tabsPagination from '@/components/utils/tabs/pagination.vue'
import tabsRight from '@/components/utils/tabs/right.vue'
import tabsSearch from '@/components/utils/tabs/search.vue'

/**
* @title Sparklines components.
* The sparkline component can be used to create simple graphs, like GitHub's contribution chart
*
Any [SVG attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute) may be used in addition to the ones listed below.
*/
import sparklinesDashboardCard from '@/components/utils/sparklines/dashboardCard.vue'
import sparklinesFill from '@/components/utils/sparklines/fill.vue'
import sparklinesHeartRate from '@/components/utils/sparklines/heartRate.vue'
import sparklinesPlayground from '@/components/utils/sparklines/playground.vue'
import sparklinesSalesCard from '@/components/utils/sparklines/salesCard.vue'

/**
 *
 * forms
 *
 */


/**
 * @title Combobox components.
 * Combobox info coming soon
 */
import comboboxAdvanced from '@/components/forms/combobox/advanced.vue'
import comboboxComboboxMultiple from '@/components/forms/combobox/comboboxMultiple.vue'
import comboboxNoData from '@/components/forms/combobox/noData.vue'



/**
 * @title Autocompletes components.
 * The <code> v-autocomplete</code> comp onent offers simple and flexible type-ahead functionality
 *  This is useful when searching large sets of data or even dynamically requesting information from an API.
 */
import autocompletesAdvanced from '@/components/forms/autocompletes/advanced.vue'
import autocompletesApi from '@/components/forms/autocompletes/api.vue'
import autocompletesAsynchronous from '@/components/forms/autocompletes/asynchronous.vue'
import autocompletesCustomFilter from '@/components/forms/autocompletes/customFilter.vue'
import autocompletesScopedSlots from '@/components/forms/autocompletes/scopedSlots.vue'



/**
 * @title Forms components.
 * When it comes to form validation, Vuetify has a multitude of integrations and baked in functionality
 *  Want to use a 3rd party validation plugin? Out of the box you can use [Vee-validate](https://github.com/baianat/Vee-validate) and [vuelidate](https://github.com/monterail/vuelidate).
 */
import formsRules from '@/components/forms/forms/rules.vue'

import formsValidationWithSubmitAndClear from '@/components/forms/forms/validationWithSubmitAndClear.vue'
import formsVeeValidate from '@/components/forms/forms/veeValidate.vue'
import formsVuelidate from '@/components/forms/forms/vuelidate.vue'




/**
 * @title Selectioncontrols components.
 * Selectioncontrols Examples
 */
import selectionControlsCheckboxesArray from '@/components/forms/selection-controls/checkboxesArray.vue'
import selectionControlsCheckboxesBoolean from '@/components/forms/selection-controls/checkboxesBoolean.vue'
import selectionControlsCheckboxesColors from '@/components/forms/selection-controls/checkboxesColors.vue'
import selectionControlsCheckboxesInlineTexfield from '@/components/forms/selection-controls/checkboxesInlineTexfield.vue'
import selectionControlsCheckboxesStates from '@/components/forms/selection-controls/checkboxesStates.vue'
import selectionControlsLabelSlot from '@/components/forms/selection-controls/labelSlot.vue'
import selectionControlsRadiosColors from '@/components/forms/selection-controls/radiosColors.vue'
import selectionControlsRadiosDefault from '@/components/forms/selection-controls/radiosDefault.vue'
import selectionControlsRadiosDirection from '@/components/forms/selection-controls/radiosDirection.vue'
import selectionControlsSwitchesArray from '@/components/forms/selection-controls/switchesArray.vue'
import selectionControlsSwitchesBoolean from '@/components/forms/selection-controls/switchesBoolean.vue'
import selectionControlsSwitchesColors from '@/components/forms/selection-controls/switchesColors.vue'
import selectionControlsSwitchesStates from '@/components/forms/selection-controls/switchesStates.vue'


/**
 * @title Selects components.
 * Select fields components are used for collecting user provided information from a list of options.
 */
import selectsCustomTextAndValue from '@/components/forms/selects/customTextAndValue.vue'
import selectsIcons from '@/components/forms/selects/icons.vue'
import selectsLight from '@/components/forms/selects/light.vue'
import selectsMultiple from '@/components/forms/selects/multiple.vue'
import selectsSelectionAppearance from '@/components/forms/selects/selectionAppearance.vue'
import selectsSlots from '@/components/forms/selects/slots.vue'


import griddirectionAndAlign from '@/components/app-layout/grid/directionAndAlign.vue'

import gridgrowShrink from '@/components/app-layout/grid/growShrink.vue'
import gridnestedGrid from '@/components/app-layout/grid/nestedGrid.vue'
import gridoffset from '@/components/app-layout/grid/offset.vue'
import gridorder from '@/components/app-layout/grid/order.vue'
import gridplayground from '@/components/app-layout/grid/playground.vue'
import gridrowColumnBreakpoint from '@/components/app-layout/grid/rowColumnBreakpoint.vue'
import gridusage from '@/components/app-layout/grid/usage.vue'
import gridlistsusage from '@/components/app-layout/grid-lists/usage.vue'
import griduniqueLayouts from '@/components/app-layout/grid/uniqueLayouts.vue'
import gridlistssubheader from '@/components/app-layout/grid-lists/subheader.vue'
import widgetsCard from '@/components/widgets/widgetsCard.vue'
import widgetsList from '@/components/widgets/widgetsList.vue'
















export {
  AppCard,
  AppTopSearch,
  AppHeader,
  AppDrawerList,
  AppDrawer,
  AppTop,
  AppParallax,
  AppMessages,
  AppNotifications,
  AppUser,
  AppTranslation,
  alertsClosable,
  alertsIcon,
  alertsOutline,
  alertsTransition,


  autocompletesAdvanced,
  autocompletesApi,
  autocompletesAsynchronous,
  autocompletesCustomFilter,
  autocompletesScopedSlots,

  avatarsAdvanced,
  avatarsIconAndText,

  badgesIcon,
  badgesInline,
  badgesOverlap,

  badgesVisibility,
  bar3DExample1,
  bar3DExample2,
  bar3DExample3,
  barChartBar,
  barChartBarAndLine,
  barChartBarHorizontal,
  bottomNavigationColorAndShift,
  bottomNavigationToggle,

  bottomSheetsInset,

  breadcrumbsIconDividers,
  breadcrumbsItemSlot,

  buttonGroupsAppBar,

  buttonsBlock,
  buttonsDepressed,
  buttonsDropdown,
  buttonsFlat,
  buttonsFloating,
  buttonsIcon,
  buttonsLoaders,
  buttonsOutline,
  buttonsRaised,
  buttonsRound,
  buttonsSizing,

  calendarMapExample1,
  calendarMapExample2,
  calendarMapExample3,
  calendarsDaily,
  calendarsEvents,
  calendarsFeatures,
  calendarsSlots,

  calendarsWeekly,
  cardsCustomActions,
  cardsGrids,
  cardsHorizontal,
  cardsMediaWithText,
  cardsTwitterCard,

  carouselsCustomIcons,
  carouselsCustomTransition,
  carouselsHideControls,
  carouselsHideDelimiters,

  chipsClosable,
  chipsColored,
  chipsIcon,
  chipsInSelects,
  chipsLabel,
  chipsOutline,

  comboboxAdvanced,
  comboboxComboboxMultiple,
  comboboxNoData,


  dataIteratorSlots,

  dataTablesCrud,
  dataTablesCustomIcons,
  dataTablesEditdialog,
  dataTablesExpand,
  dataTablesFooter,
  dataTablesHeaderCell,
  dataTablesHeaderless,
  dataTablesHeaders,
  dataTablesNoData,
  dataTablesPageText,
  dataTablesPaginate,
  dataTablesProgress,
  dataTablesSearch,
  dataTablesSelect,
  dataTablesServer,
  dataTablesSort,

  datePickersDateAllowedDates,
  datePickersDateBirthday,
  datePickersDateColorable,
  datePickersDateCurrent,
  datePickersDateDialogAndMenu,
  datePickersDateEvents,
  datePickersDateFormatting,
  datePickersDateFormattingMomentDatefns,
  datePickersDateIcons,
  datePickersDateInternationalization,
  datePickersDateMultiple,
  datePickersDatePickerDate,
  datePickersDateReadonly,
  datePickersDateWidth,
  datePickersMonthAllowedMonths,
  datePickersMonthColorable,
  datePickersMonthCurrent,
  datePickersMonthDialogAndMenu,
  datePickersMonthEvents,
  datePickersMonthIcons,
  datePickersMonthInternationalization,
  datePickersMonthLight,
  datePickersMonthMultiple,
  datePickersMonthReadonly,
  datePickersMonthWidth,

  dialogsAdvanced,
  dialogsForm,
  dialogsFullscreen,
  dialogsLoader,
  dialogsModal,
  dialogsOverflowed,
  dialogsScrollable,

  dialogsWithoutActivator,

  dividersDividerList,
  dividersDividerListPortrait,
  dividersDividerPortrait,
  dividersInset,
  dividersLightAndDark,
  dividersSubheaders,

  dividersVertical,

  expansionPanelsCustomIcons,
  expansionPanelsDisabledAndReadonly,
  expansionPanelsExpand,
  expansionPanelsExternal,
  expansionPanelsFocusable,
  expansionPanelsIconSlot,
  expansionPanelsPopout,

  floatingActionButtonsDisplayAnimation,
  floatingActionButtonsLateralScreens,
  floatingActionButtonsSmall,
  floatingActionButtonsSpeedDial,

  footerCompanyFooter,
  footerIndigoFooter,
  footerTealFooter,

  formsRules,


  formsValidationWithSubmitAndClear,
  formsVeeValidate,
  formsVuelidate,
  globeExample1,

  graphExample1,
  graphExample2,
  graphExample3,


  hoverTransition,


  imagesContainCover,
  imagesGradients,
  imagesMaxHeight,
  imagesRatio,


  itemGroupsPost,

  lineChartExample1,
  lineChartExample2,
  lineChartExample3,
  listsActionTitleAndSubtitle,
  listsAvatarSubheaderTitleAndAction,
  listsAvatarThreeLines,
  listsAvatarTitleAndAction,
  listsCardList,
  listsExpansionLists,
  listsIconTwoLinesAndAction,
  listsSubheadingsAndDividers,
  listsTitleSubtitleActionsAndActionText,

  mapChartExample1,
  mapChartExample2,
  mapChartExample3,
  menusAbsolute,
  menusAbsoluteWithoutActivator,
  menusCustomTransition,
  menusHover,
  menusMenus,
  menusPopover,

  navigationDrawersCombined,
  navigationDrawersDark,
  navigationDrawersMini,
  navigationDrawersNested,
  navigationDrawersPermanentClipped,
  navigationDrawersPermanentFloating,
  navigationDrawersPermanentFloatingCard,
  navigationDrawersPersistent,
  navigationDrawersTemporary,

  paginationsDisabled,
  paginationsIcons,
  paginationsLimit,
  paginationsLong,
  paginationsRound,

  parallaxContent,
  parallaxCustomHeight,

  pieChartExample1,
  pieChartExample2,
  pieChartExample3,
  progressCircularColored,
  progressCircularIndeterminate,
  progressCircularRotate,
  progressCircularSizeAndWidth,
  progressLinearBuffer,
  progressLinearCustomColors,
  progressLinearCustomHeightAndContextualColors,
  progressLinearDeterminate,
  progressLinearIndeterminate,
  progressLinearQueryIndeterminateAndDeterminate,

  ratingsCard,
  ratingsIncrements,
  ratingsLength,
  ratingsSizes,




  sankeyExample1,
  sankeyExample2,
  sankeyExample3,


  selectionControlsCheckboxesArray,
  selectionControlsCheckboxesBoolean,
  selectionControlsCheckboxesColors,
  selectionControlsCheckboxesInlineTexfield,
  selectionControlsCheckboxesStates,
  selectionControlsLabelSlot,
  selectionControlsRadiosColors,
  selectionControlsRadiosDefault,
  selectionControlsRadiosDirection,
  selectionControlsSwitchesArray,
  selectionControlsSwitchesBoolean,
  selectionControlsSwitchesColors,
  selectionControlsSwitchesStates,

  selectsCustomTextAndValue,
  selectsIcons,
  selectsLight,
  selectsMultiple,
  selectsSelectionAppearance,
  selectsSlots,

  sheetsElevation,

  slidersCustomColors,
  slidersCustomThumb,
  slidersDiscrete,
  slidersEditableNumericValue,
  slidersIcons,
  slidersMetronome,
  slidersMinMax,
  slidersRange,
  slidersStep,
  slidersThumb,
  slidersThumbLabel,
  slidersTicks,

  slidersValidation,
  snackbarsContextual,

  sparklinesDashboardCard,
  sparklinesFill,
  sparklinesHeartRate,
  sparklinesPlayground,
  sparklinesSalesCard,
  steppersAlternateError,
  steppersAlternateLabels,
  steppersAlternativeError,
  steppersDynamic,
  steppersEditable,
  steppersError,
  steppersHorizontal,
  steppersLinear,
  steppersNonEditable,
  steppersNonLinear,
  steppersOptional,

  subheadersGrid,
  subheadersMenu,
  subheadersSocial,

  sunBurstExample1,
  sunBurstExample2,
  sunBurstExample3,
  tabsAlignWithTitle,
  tabsContent,
  tabsDesktop,
  tabsFixedTabs,
  tabsGrow,
  tabsIcons,
  tabsIconsAndText,
  tabsOverflowToMenu,
  tabsPagination,
  tabsRight,
  tabsSearch,


  timePickersTime24HFormat,
  timePickersTimeAllowedTimes,
  timePickersTimeColorable,
  timePickersTimeDialogAndMenu,
  timePickersTimeWidth,

  timelinesAdvanced,
  timelinesAlert,
  timelinesAvatars,
  timelinesColor,
  timelinesIcons,
  timelinesSlot,
  timelinesSmall,

  toolbarsAppBar,
  toolbarsAppBarExtension,
  toolbarsAppBarItems,
  toolbarsAppBarMenu,
  toolbarsColumnWidthWithHierarchy,
  toolbarsDense,
  toolbarsFlexibleAndCard,
  toolbarsFloatingWithSearch,
  toolbarsProminent,
  toolbarsScrolling,
  toolbarsSystemBarsStatusWindow,

  toolbarsVariations,
  tooltipsAlignment,

  tooltipsVisibility,


  treeExample1,
  treeExample2,
  treeExample3,
  treeviewDirectory,
  treeviewFileExplorer,
  treeviewHotspots,

  griddirectionAndAlign,
  gridgrowShrink,
  gridnestedGrid,
  gridoffset,
  gridorder,
  gridplayground,
  gridrowColumnBreakpoint,

  griduniqueLayouts,
  gridusage,
  gridlistssubheader,
  gridlistsusage,


  windowsAccount,
  windowsOnboarding,
  widgetsCard,
  widgetsList,

}
