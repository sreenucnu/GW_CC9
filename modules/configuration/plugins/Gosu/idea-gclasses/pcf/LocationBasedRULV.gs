package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/policylocations/LocationBasedRULV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LocationBasedRULV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($PolicyLocation :  PolicyLocation) : void {
    __widgetOf(this, pcf.LocationBasedRULV, SECTION_WIDGET_CLASS).setVariables(false, {$PolicyLocation})
  }
  
  function refreshVariables ($PolicyLocation :  PolicyLocation) : void {
    __widgetOf(this, pcf.LocationBasedRULV, SECTION_WIDGET_CLASS).setVariables(true, {$PolicyLocation})
  }
  
  
}