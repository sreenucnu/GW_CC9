package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/util/ClaimCenterStartupPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimCenterStartupPage extends com.guidewire.pl.web.codegen.LocationBase {
  private static function config () : com.guidewire.pl.web.navigation.LocationConfig {
    return __configOf(pcf.ClaimCenterStartupPage, LOCATION_CONFIG_CLASS)
  }
  
  static function createDestination () : pcf.api.Destination {
    return __newDestination(config(), {}, 0)
  }
  
  static function drilldown () : pcf.api.Location {
    return __newDestination(config(), {}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go () : pcf.api.Location {
    return __newDestination(config(), {}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain () : pcf.api.Location {
    return __newDestination(config(), {}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace () : pcf.api.Location {
    return __newDestination(config(), {}, 0).goInWorkspace()
  }
  
  static function printPage () : pcf.api.Location {
    return __newDestination(config(), {}, 0).printPage()
  }
  
  static function push () : pcf.api.Location {
    return __newDestination(config(), {}, 0).push()
  }
  
  
}