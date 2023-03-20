// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {

    chrome.storage.sync.set({selected_category: Array.of("10", "33", "24", "23", "36", "42", "43", "29", "27", "28", "19", "38", "17", "25", "20", "26", "2", "21", "22", "30", "1", "18", "31", "32", "35", "39", "40", "41", "44", "37", "15")}, function() {
        console.log("Default: All Categories are selected.");
    });
    chrome.tabs.create({
        url: 'https://youtube.com',
        active: true
    });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'www.youtube.com', schemes: ['https'] },
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});
