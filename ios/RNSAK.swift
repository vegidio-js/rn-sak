//
//  RNSAK.swift
//  RNSAK
//
//  Copyright © 2020 Alex Demchenko. All rights reserved.
//

import Foundation

@objc(RNSAK)
class RNSAK: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
