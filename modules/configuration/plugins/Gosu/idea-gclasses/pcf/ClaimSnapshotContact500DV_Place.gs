package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotContact500DV.place.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotContact500DV_Place extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($ClaimContactParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotContact500DV_Place, SECTION_WIDGET_CLASS).setVariables(false, {$ClaimContactParam})
  }
  
  function refreshVariables ($ClaimContactParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotContact500DV_Place, SECTION_WIDGET_CLASS).setVariables(true, {$ClaimContactParam})
  }
  
  
}