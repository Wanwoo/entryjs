'use strict';

var Entry = {};

module.exports = Entry;
global.Entry = Entry;

require('./css/entry.less');
require('./class/container');
require('./class/dialog');
require('./class/doneProject');
require('./class/engine');
require('./class/entity');
require('./class/function');
require('./class/helper');
require('./class/hw');
require('./class/hw_monitor');
require('./class/object');
require('./class/painter');
require('./class/pdf');
require('./class/playground');
require('./class/popup');
require('./class/popup_helper');
require('./class/popup_list');
require('./class/project');
require('./class/property_panel');
require('./class/reporter');
require('./class/scene');
require('./class/script');
require('./class/stage');
require('./class/stamp_entity');
require('./class/toast');
require('./class/variable');
require('./class/variable_container');
require('./command/command');
require('./command/commander');
require('./core/collection');
require('./core/db');
require('./core/dom');
require('./core/event');
require('./core/model');
require('./core/observer');
require('./core/svg');
require('./extensions/extension');
require('./extensions/target_checker');
require('./log/activity');
require('./log/activityReporter');
require('./log/recorder');
require('./log/state');
require('./log/state_manager');
require('./model/block_model');
require('./model/block_render_model');
require('./model/box_model');
require('./model/drag_instance');
require('./model/thread_model');
require('./parser-no/block');
require('./parser-no/js');
require('./parser-no/parser');
require('./playground/block');
require('./playground/block_entry');
require('./playground/block_entry_mini');
require('./playground/block_menu');
require('./playground/block_menu_scroll');
require('./playground/block_view');
require('./playground/board');
require('./playground/code');
require('./playground/code_view');
require('./playground/connection_ripple');
require('./playground/executors');
require('./playground/globalSvg');
require('./playground/mutator');
require('./playground/renderView');
require('./playground/scroll');
require('./playground/skeleton');
require('./playground/skinner');
require('./playground/thread');
require('./playground/thread_view');
require('./playground/trashcan');
require('./playground/vim');
require('./playground/workspace');
require('./textcoding/parser');
require('./util/block_driver');
require('./util/contextmenu');
require('./util/curtain');
require('./util/fuzzy');
require('./util/init');
require('./util/loader');
require('./util/popup');
require('./util/restrictor');
require('./util/static');
require('./util/toast');
require('./util/tooltip');
require('./util/tvCast');
require('./util/utils');
require('./util/youtube');
require('./command/commands/block');
require('./command/commands/container');
require('./command/commands/engine');
require('./command/commands/object');
require('./command/commands/painter');
require('./command/commands/playground');
require('./command/commands/textbox');
require('./command/commands/variableContainer');
require('./command/commands/scene');
require('./playground/blocks/block_albert');
require('./playground/blocks/block_altino');
require('./playground/blocks/block_arduino');
require('./playground/blocks/block_bitbrick');
require('./playground/blocks/block_blacksmith');
require('./playground/blocks/block_byrobot_dronefighter_controller');
require('./playground/blocks/block_byrobot_dronefighter_drive');
require('./playground/blocks/block_byrobot_dronefighter_flight');
require('./playground/blocks/block_byrobot_petrone_v2_controller');
require('./playground/blocks/block_byrobot_petrone_v2_drive');
require('./playground/blocks/block_byrobot_petrone_v2_flight');
require('./playground/blocks/block_chocopi');
require('./playground/blocks/block_cobl');
require('./playground/blocks/block_coconut');
require('./playground/blocks/block_codeino');
require('./playground/blocks/block_codestar');
require('./playground/blocks/block_dadublock');
require('./playground/blocks/block_edumaker');
require('./playground/blocks/block_ev3');
require('./playground/blocks/block_hamster');
require('./playground/blocks/block_hummingbird');
require('./playground/blocks/block_iboard');
require('./playground/blocks/block_jdkit');
require('./playground/blocks/block_mechatronics_4d');
require('./playground/blocks/block_modi');
require('./playground/blocks/block_neobot');
require('./playground/blocks/block_neobot_sensor_theme');
require('./playground/blocks/block_roborobo');
require('./playground/blocks/block_robotis');
require('./playground/blocks/block_robotori');
require('./playground/blocks/block_truerobot');
require('./playground/blocks/block_turtle');
require('./playground/blocks/block_xbot');
require('./playground/extension/extension');
require('./playground/extension/guide');
require('./playground/extension/side_tag');
require('./playground/field/angle');
require('./playground/field/block');
require('./playground/field/color');
require('./playground/field/dropdown');
require('./playground/field/dropdownDynamic');
require('./playground/field/field');
require('./playground/field/image');
require('./playground/field/indicator');
require('./playground/field/keyboardInput');
require('./playground/field/lineBreak');
require('./playground/field/output');
require('./playground/field/statement');
require('./playground/field/text');
require('./playground/field/textInput');
require('./textcoding/ast/jsAstGenerator');
require('./textcoding/ast/pyAstGenerator');
require('./textcoding/data_processing/map');
require('./textcoding/data_processing/queue');
require('./textcoding/error/textCodingError');
require('./textcoding/hint/python');
require('./textcoding/static/codeMap');
require('./textcoding/static/keyboardCode');
require('./textcoding/util/console');
require('./textcoding/util/textCodingUtil');

window.Entry = Entry;
