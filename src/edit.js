/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit() {

	const TEMPLATE = [ [ 'core/columns', {
		isStackedOnMobile: false,
		templateLock: true,
		verticalAlignment: "top"
	}, [
		[ 'core/column', {
		width: 25
		}, [
			[ 'core/image', {
				url: "http://media.spvgg-bayreuth.de/images/default/portrait/male.jpg"
			} ],
		] ],
		[ 'core/column', {
		width: 75
		}, [
			[ 'core/heading', { content: 'Ansprechpartner', level: 3, className: "is-style-underline" } ],
			[ 'core/paragraph', { placeholder: 'Position' } ],
			[ 'core/paragraph', { placeholder: 'E-Mail', className: "contact-email" } ],
			[ 'core/paragraph', { placeholder: 'Telefon', className: "contact-phone" } ],
		] ],
	] ] ];
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				template={ TEMPLATE }
				templateLock="all"
			/>
		</div>
	);

}
