import autoAnimate from '@formkit/auto-animate';

export function autoAnimateAction(node: HTMLElement) {
	const controller = autoAnimate(node);

	return {
		destroy() {
			controller?.disconnect?.();
		}
	};
}