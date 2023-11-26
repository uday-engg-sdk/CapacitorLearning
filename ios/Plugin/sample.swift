import Foundation

@objc public class sample: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
