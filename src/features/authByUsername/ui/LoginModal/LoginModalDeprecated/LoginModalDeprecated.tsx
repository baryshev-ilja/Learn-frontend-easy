import { Suspense } from 'react';

import { LoginFormAsync } from '../../LoginForm/LooginForm.async';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Modal } from '@/shared/ui/deprecated/Modal';

interface LoginModalDeprecatedProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    isSuccessAuth?: boolean;
}

export const LoginModalDeprecated = (props: LoginModalDeprecatedProps) => {
    const {
        className,
        isOpen,
        onClose,
        isSuccessAuth,
    } = props;
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            isUserSuccessAuth={isSuccessAuth}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
