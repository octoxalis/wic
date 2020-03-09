/*
 * User Interface
 * Naming scheme: element_s.data-attribute
 */
const C_o = require( './C_o.js' )

module.exports =
{
  header: attribute_s =>
  {
    let markup_s
    switch ( attribute_s )
    {
      case 'data-theme':
        markup_s = `Modifiez le style de ce site en cliquant sur cette banière:
          ↕ pour le mode clair/sombre${C_o.HUE_SET_n ? ' ↔ pour la teinte' : ''}`
        break;
      default:
        markup_s = ''
    }
    return `${attribute_s}="${markup_s}"`
  }
}
