package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/archive/ArchivedClaim.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ArchivedClaim extends com.guidewire.pl.web.codegen.LocationBase {
  private static function config () : com.guidewire.pl.web.navigation.LocationConfig {
    return __configOf(pcf.ArchivedClaim, LOCATION_CONFIG_CLASS)
  }
  
  static function createDestination (ClaimInfo :  ClaimInfo) : pcf.api.Destination {
    return __newDestination(config(), {ClaimInfo}, 0)
  }
  
  static function drilldown (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestination(config(), {ClaimInfo}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestination(config(), {ClaimInfo}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestination(config(), {ClaimInfo}, 0).goInMain()
  }
  
  static function printPage (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestination(config(), {ClaimInfo}, 0).printPage()
  }
  
  static function push (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestination(config(), {ClaimInfo}, 0).push()
  }
  
  
}