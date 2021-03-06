'use strict';
const objectUtil = require('../util/objectUtil');

const serverEventTypes = [
  'NOTIFICATION_COUNT_CHANGE',
  'TAXONOMY_FULL_UPDATE',
  'TAXONOMY_DIFF_CHANGE',
  'TORRENT_LIST_ACTION_TORRENT_ADDED',
  'TORRENT_LIST_ACTION_TORRENT_DELETED',
  'TORRENT_LIST_ACTION_TORRENT_DETAIL_UPDATED',
  'TORRENT_LIST_DIFF_CHANGE',
  'TORRENT_LIST_FULL_UPDATE',
  'TRANSFER_HISTORY_FULL_UPDATE',
  'TRANSFER_SUMMARY_DIFF_CHANGE',
  'TRANSFER_SUMMARY_FULL_UPDATE'
];

module.exports = objectUtil.createStringMapFromArray(serverEventTypes);
