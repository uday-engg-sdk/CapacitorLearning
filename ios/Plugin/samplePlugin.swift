import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(samplePlugin)
public class samplePlugin: CAPPlugin {
    private let implementation = sample()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
        
        appGoingToBackground()
    }
    override public func load() {
      NotificationCenter.default.addObserver(
        self,
        selector: #selector(appGoingToBackground),
        name: UIApplication.didEnterBackgroundNotification,
        object: nil)
    }

    deinit {
      NotificationCenter.default.removeObserver(self)
    }

    @objc func appGoingToBackground() {
        self.notifyListeners("ApplicationGoingToBackground", data: ["sample": "Uday@123"])
    }
}
